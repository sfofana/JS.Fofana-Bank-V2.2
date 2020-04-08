package com.app.component;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.app.exception.BusinessException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Aspect
@Component
public class LoggingAdvice {
	
	Logger log = LoggerFactory.getLogger(LoggingAdvice.class);
	
	@Pointcut(value="execution(* com.app.*.*.*(..))")
	public void PointCut() {
		return;
	}
	
	@Around("PointCut()")
	public Object applicationLogger(ProceedingJoinPoint joinPoint) throws BusinessException {
		ObjectMapper mapper = new ObjectMapper();
		String methodName = joinPoint.getSignature().getName();
		String className = joinPoint.getTarget().toString();
		Object[] objects = joinPoint.getArgs();
		try {
			log.info("Method invoked "+className+" : "+methodName+
					"("+mapper.writeValueAsString(objects)+")");
		} catch (JsonProcessingException e) {
			throw new BusinessException("Unable to invoke method");
		}
		Object object;
		try {
			object = joinPoint.proceed();
			log.info(className+" : "+methodName+
					"("+mapper.writeValueAsString(objects)+")");
		} catch (Throwable e) {
			throw new BusinessException("Unable to proceed method");
		}
		return object;
	}
}
