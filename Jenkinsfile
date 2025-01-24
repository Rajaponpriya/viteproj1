pipeline {
  agent any
  stages {
    stage("build") {
      steps {
          echo 'building the applictaion...'
          echo 'triggered by polling'
      }
    }
    stage("test") {
      steps {
          echo 'testing the applictaion...'
      }
    }
    stage("deploy") {
      steps {
          echo 'deploying the applictaion...'
      }
    }
  }
}
