git filter-branch --env-filter '
EMAIL_ANTIGO="rodrigo.fsamenezes@gmail.com"
NOME_CORRETO="Rodrigo de França"
EMAIL_CORRETO="rodrigodefrancadev@gmail.com"
if [ "$GIT_COMMITTER_EMAIL" = "$EMAIL_ANTIGO" ]
then
    export GIT_COMMITTER_NAME="$NOME_CORRETO"
    export GIT_COMMITTER_EMAIL="$EMAIL_CORRETO"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$EMAIL_ANTIGO" ]
then
    export GIT_AUTHOR_NAME="$NOME_CORRETO"
    export GIT_AUTHOR_EMAIL="$EMAIL_CORRETO"
fi
' --tag-name-filter cat -- --branches --tags