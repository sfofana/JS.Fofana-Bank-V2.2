pipeline {
    agent any
    tools {
        maven 'my_maven_3.3.9'
    }
    stages {
        stage('Compile Stage') {

            steps {
                 bat 'mvn clean compile'
            }               
        }

        stage('Testing Stage') {

            steps {
                bat 'mvn test'
            }                
        }

        stage('Deployment Stage') {

            steps {
                bat 'mvn deploy'
            }                
        }
    }
}