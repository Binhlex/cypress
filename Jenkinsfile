pipeline {
	agent {
	    	node {
			label 'master'
			customWorkspace 'C:/Users/binh1/OneDrive/Desktop/Automation/Cypress/Cypress-Github-Jenkins-Pipeline-Demo'
		}
	}
	
	stages {
		stage('Clone Git Repo'){
				steps{
					git 'https://github.com/Binhlex/cypress.git'
		    }
		}
		stage('Install Dependencies'){
				steps{
					bat 'npm install npm@latest -g'
					bat 'npm install'
				}
		}
		stage('Run Tests'){
				steps{
					bat 'npm run gorest_test'
				}
		}
		stage('Publish HTML Report'){
				steps{
					publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/mochawesome-report', reportFiles: 'mochawesome.html', reportName: 'HTML Report', reportTitles: ''])
				}
		}
	}
}
