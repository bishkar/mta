FROM python

WORKDIR /usr/src/library

COPY requirements.txt ./

RUN pip install -r requirements.txt

RUN python manage.py makemigrations
RUN python manage.py migrate
