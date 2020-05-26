# final
Para ejecutar se necesita XamPP para ejecutar la base de datos
iniciar Apache y Mysql
Subir a las bases de datos con el nombre proyecto_v
crear tablas de paciente y registro 
pacientes con campos 
Id Nombre Apellido CC Genero Edad Dominante Fecha
y registro con campos

id CC Edad Gadas AA AL AD Fecha

subir los csv que estan en la carpeta database

para configurar el MYsql se recomienda ver este video si se esta usando Xamp
https://www.youtube.com/watch?v=WzBHaNFEags&list=LLoKFbM8lqkHeU92edtR6Xnw&index=9&t=33s

cuando este configurado se debe iniciar la comunicacion con la base de datos de la siguente manera
cd server
npm run dev
cuando este listo cambiar a carpeta client y ejecutar ng server

NOTA no olvida usar el comando "npm install --save-dev @angular-devkit/build-angular" para poder usar el ng serve

