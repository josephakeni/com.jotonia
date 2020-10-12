pipeline {
	agent any
	stages {
		stage ("check docker version") {
                        steps {
			  echo 'verifying needed tools are available'
			sh '''
			git --version
			docker --version
			'''
                }
        }

		stage ("build docker image") { 
			steps {
			sh 'sudo docker build -f Dockerfile.prod -t jotonia:1.2 . '
		}
	}
		stage ('test container') {
			steps {
			sh '''
			id=$(sudo docker run -p 1337:80 -d jotonia:1.2)
			curl localhost:1337 | grep "jotonia" && echo "Test successfull"
			echo "deleting container"
			sudo docker rm -f $id
			echo "container deleted.. all is well"
			'''
		}
	}
		stage ("push docker image") {
                        steps {
                 
			echo "tagging image"
			sh 'sudo docker tag jotonia:1.2 jakeni/jotoniaapp1:v4'
			withCredentials([usernamePassword(credentialsId: 'DockerHub', passwordVariable: 'pass', usernameVariable: 'user')]) {
  			echo "pushing container to hub"
			sh 'sudo docker login -u jakeni -p $pass'
  			sh 'sudo docker push jakeni/jotoniaapp1:v4'
  			sh 'sudo docker logout'
			echo "clean up container, deleting containers"
			sh 'sudo docker rmi -f $(sudo docker images -a -q)'
			}	      
                }
        }
		stage ("deploy docker image") {
                        steps {
			echo "Cleaning up before deployment"
			sh 'ssh jakeni@192.168.33.12 sudo docker rm -f $(ssh jakeni@192.168.33.12 sudo docker ps -a -q) '
			echo "Deployning latest version"
                        sh 'ssh jakeni@192.168.33.12 sudo docker run -d --rm -p 80:80 jakeni/jotoniaapp1:v4 '
                }
        }


 }
}
