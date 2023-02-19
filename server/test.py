
# for adding data to sql database
from flask import Flask
import mysql.connector
from sqlalchemy.sql import func
from flask_sqlalchemy import SQLAlchemy
from os import path

app = Flask(__name__)
db = SQLAlchemy()


class Packagedetail(db.Model):
    packageNo = db.Column(db.String(40), primary_key=True)
    prizes = db.Column(db.Text, unique=True)
    status = db.Column(db.String(20), unique=True)
    email = db.Column(db.String(50))


DB_NAME = "database.db"
app.config["SECRET_KEY"] = "helloworld"
app.config["SQLALCHEMY_DATABASE_URI"] = f'sqlite:///{DB_NAME}'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)


@app.route('/')
def index():

    packageNo = "Hackccelerate-96123"
    prizes = "GitHub Sticker Pack, Compression Packing Cubes, MLH Logo Sticker"
    status = "Processing"
    email = "devsapariya94@gmail.com"

    newPackage = Packagedetail(
        email=email, packageNo=packageNo, prizes=prizes, status=status)
    db.session.add(newPackage)
    db.session.commit()

    packageNo = "SharkHacks4-97823"
    prizes = "MLH Logo Sticker, Fitbit Inspire 2"
    status = "KYC pending"
    email = "dtest@gmail.com"

    newPackage = Packagedetail(
        email=email, packageNo=packageNo, prizes=prizes, status=status)
    db.session.add(newPackage)
    db.session.commit()

    packageNo = "Supportathon-96822"
    prizes = "Unisex Large Gene Season Tee, Anker Soundcore Wireless Earbuds, MLH Logo Sticker"
    status = "Shipped"
    email = "abc@abc.com"

    newPackage = Packagedetail(
        email=email, packageNo=packageNo, prizes=prizes, status=status)
    db.session.add(newPackage)
    db.session.commit()

    print("done")
    return "hello"


app.run(debug=True)
