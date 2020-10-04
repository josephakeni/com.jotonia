pipeline {
	agent any
	stages {
		stage ("check docker version") {
                        steps {
			  echo 'verifying needed tools are available'
			sh '''
			git --version
			docker -version
			'''
                }
        }

		stage ("build docker image") { 
			steps {
			sh 'sudo docker build -f Dockerfile.prod -t jotonia:1.1 . '
		}
	}
		stage ('test container') {
			steps {
			sh '''
			id=$(sudo docker run -p 1337:80 -d jotonia:1.1)
			curl localhost:1337 | grep "jotonia" && echo "Test successfull"
			echo "deleting container"
			docker rm -f $id
			echo "container deleted.. all is well"
			'''
		}
	}
		stage ("push docker image") {
                        steps {
                        sh '''
			echo "tagging image"
			sudo docker tag jotonia:latest jakeni/jotoniaapp1:v1
			withCredentials([usernamePassword(credentialsId: 'DockerHub', passwordVariable: 'pass', usernameVariable: 'user')]) {
  			echo "pushing container to hub"
			sudo docker login -u jakeni -p $pass
  			sudo docker push jakeni/jotoniaapp1:v1
  			sudo docker logout
			}	      
			'''
                }
        }


 }
}
