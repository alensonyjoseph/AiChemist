from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, Text, DateTime
from datetime import datetime

# TiDB setup
CA_CERT_PATH = "C:\\Users\\alens\\Desktop\\AiChemist\\cacert.pem"
DATABASE_URI = f'mysql+pymysql://2Et4CnZ5sLUkCAH.root:E9a0ilecnE5DVuiU@gateway01.us-west-2.prod.aws.tidbcloud.com:4000/test'

engine = create_engine(DATABASE_URI, connect_args={
    'ssl': {
        'ssl_mode': 'VERIFY_IDENTITY',
        'ssl_ca': CA_CERT_PATH
    }
})

metadata = MetaData()

compounds = Table('compounds', metadata,
    Column('id', Integer, primary_key=True),
    Column('smile', String(255)),
    Column('description', Text)
)

experiments = Table('experiments', metadata,
    Column('id', Integer, primary_key=True),
    Column('name', String(255)),
    Column('description', Text)
)

lab_notebook_entries = Table('lab_notebook_entries', metadata,
    Column('id', Integer, primary_key=True),
    Column('experiment_id', Integer),
    Column('entry', Text),
    Column('timestamp', DateTime, default=datetime.utcnow)
)

discussion_messages = Table('discussion_messages', metadata,
    Column('id', Integer, primary_key=True),
    Column('experiment_id', Integer),
    Column('message', Text),
    Column('timestamp', DateTime, default=datetime.utcnow)
)

def create_tables():
    metadata.create_all(engine)

def insert_compound(smile, description):
    with engine.connect() as conn:
        stmt = compounds.insert().values(smile=smile, description=description)
        conn.execute(stmt)

def get_all_compounds():
    with engine.connect() as conn:
        select_stmt = compounds.select()
        results = conn.execute(select_stmt).fetchall()
        return [dict(row) for row in results]

def update_compound_description(compound_id, description):
    with engine.connect() as conn:
        update_stmt = compounds.update().where(compounds.c.id == compound_id).values(description=description)
        conn.execute(update_stmt)

def delete_compound(compound_id):
    with engine.connect() as conn:
        delete_stmt = compounds.delete().where(compounds.c.id == compound_id)
        conn.execute(delete_stmt)

# You can add functions for CRUD operations on the experiments, lab_notebook_entries, and discussion_messages tables here.
