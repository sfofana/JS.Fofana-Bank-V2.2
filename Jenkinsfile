pipeline {
    agent any

    stages {
        stage('Compile Stage') {

            steps
                withMaven(mave: 'my_maven_3.3.9') {
                    sh 'mvn clean compile'

            }
        }

        stage('Testing Stage') {

            steps
                withMaven(mave: 'my_maven_3.3.9') {
                    sh 'mvn test'

            }
        }

        stage('Deployment Stage') {

            steps
                withMaven(mave: 'my_maven_3.3.9') {
                    sh 'mvn deploy'

            }
        }
    }
}