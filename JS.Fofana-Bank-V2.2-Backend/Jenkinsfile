pipeline {
    agent any

    stages {
        stage('Compile Stage') {

            steps {
                 withMaven(maven: 'my_maven_3.3.9') {
                    sh 'mvn clean compile'
                    }
            }               
        }

        stage('Testing Stage') {

            steps {
                withMaven(maven: 'my_maven_3.3.9') {
                    sh 'mvn test'
                    }
            }                
        }

        stage('Deployment Stage') {

            steps {
                withMaven(maven: 'my_maven_3.3.9') {
                    sh 'mvn deploy'
                    }
            }                
        }
    }
}