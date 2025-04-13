import pymysql

try:
    conn = pymysql.connect(
        host='localhost',
        user='root',
        password='3113130',
        database='vs',
        port=3306
    )
    print("连接成功！")
    conn.close()
except Exception as e:
    print("连接失败：", e)
