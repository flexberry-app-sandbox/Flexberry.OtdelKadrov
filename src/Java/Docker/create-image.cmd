docker build --no-cache -f SQL\Dockerfile.PostgreSql -t otdel_kadrov-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t otdel_kadrov-java/app ../../..
