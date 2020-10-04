pipeline {
	agent any
	stages {
		stage ("check docker version") { 
			steps {
			sh 'sudo docker build -f Dockerfile.prod -t jotonia:1.1 . '
		}
	}
 }
}
