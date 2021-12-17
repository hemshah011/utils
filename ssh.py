import pexpect

PROMPT = ['# ','>>> ','> ','\$ ']

def send_command(child, cmd):
    child.sendline(cmd)
    child.expect(PROMPT)
    print (child.before.decode())

def connectVM(user, host, password):
    ssh_connect = 'ssh ' + user + '@' + host + "'s "
    connStr = 'ssh ' + user + '@' + host
    child = pexpect.spawn(connStr)
    child.expect([pexpect.TIMEOUT, ssh_connect, 'password: ',pexpect.EOF])
    child.sendline(password)
    child.expect(PROMPT)
    return child

def main():
    company='autobot'
    host = '13.94.61.225'
    user = 'limechat'
    password = 'Wavicle@12345'
    child = connectVM(user, host , password)
    send_command(child, 'cd apps/demo-website/')
    send_command(child, 'git checkout automation-testing')
    send_command(child,"git pull https:\/\/" + "team336" + ":" + "wavicle123" + "@gitlab.com\/gupta.nikhil\/demo-website master")
    send_command(child,'pm2 reload demo')
    return print("Completed!, Find Page at https://demo.limechat.ai/{}".format(company))

if __name__ == '__main__':
        main()