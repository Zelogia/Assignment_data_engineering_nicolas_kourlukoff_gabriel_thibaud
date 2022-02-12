pipeline {
    agent any
    stages {
        stage('Building') {
            steps {
                bat "docker-compose build"
            }
        }
        stage('Pushing into Release') {
            steps {
                git([url:'https://github.com/Zelogia/Assignment_data_engineering_nicolas_kourlukoff_gabriel_thibaud.git/',branch:'release'])
            bat "git push origin release"
            }
        }
    }
}