pipeline{
stages{
stage("run frontend"){
steps{
echo 'executing npm...'
nodejs('node-14.10.0')
sh 'npm install'
}
}
}
stages{
stage("run backend"){
steps{
echo 'executing gradle...'
withGradle() {
sh './gradlew -v'
}
}
}
}
}
