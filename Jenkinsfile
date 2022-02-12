pipeline {
    agent any
    stages {
        stage('Cloning git') {
            steps {
                git([url:'https://github.com/Zelogia/Assignment_data_engineering_nicolas_kourlukoff_gabriel_thibaud.git/',branch:'release'])
        bat "git pull origin dev"
            }
        }
        stage('Building') {
            steps {
                bat "docker-compose build"
            }
        }
    }
}