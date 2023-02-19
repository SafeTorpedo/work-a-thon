from flask import Flask
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


def create_database(app):
    if not path.exists(DB_NAME):
        db.create_all(app=app)


DB_NAME = "database.db"
app.config["SECRET_KEY"] = "helloworld"
app.config["SQLALCHEMY_DATABASE_URI"] = f'sqlite:///{DB_NAME}'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)


create_database(app)


@app.route('/data/<email>')
def get_time(email):
    try:
        Package = Packagedetail.query.filter_by(email=email).first()
        data = {
            'PackageNo': Package.packageNo,
            'Prizes': Package.prizes,
            'Status': Package.status,
            'email': Package.email,
        }
        return data

    except:
        data = {
            'PackageNo': 'No Data Found',
            'Prizes': 'No Data Found',
            'Status': 'No Data Found',
            'email': 'No Data Found',
        }
        return data


if __name__ == '__main__':
    app.run(debug=True)
