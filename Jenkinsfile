pipeline {
    agent any
    tools {
        maven 'my_maven_3.3.9'
    }
    environment {
        EMAIL_RECIPIENTS = 'sufyanfofana@yahoo.com'
    stages {
        stage('Compile Stage') {

            steps {
                 sh 'mvn clean compile'
            }               
        }

        stage('Testing Stage') {

            steps {
                sh 'mvn test'
            }                
        }

        stage('Deployment Stage') {

            steps {
                sh 'mvn deploy'
            }                
        }
    }
}