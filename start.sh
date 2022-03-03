# echo "${DATABASE_SSH_KEY}" > ./id_rsa.pem
# chmod 600 ./id_rsa.pem
# ssh -o ExitOnForwardFailure=yes -o StrictHostKeyChecking=no -f -N -L 3306:${DATABASE_HOST}:3306 ec2-user@${DATABASE_SSH_HOST} -i ./id_rsa.pem sleep 15

yarn prisma:migrate
yarn prisma:generate
yarn start
