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

def connectGit(username, password):
    cmd='git push --set-upstream https://gitlab.com/gupta.nikhil/demo-website master'
    child = pexpect.spawn(cmd)
    child.expect([pexpect.TIMEOUT,'Username.*: ',pexpect.EOF])
    child.sendline(username)
    print("delta",child.before.decode())
    child.expect([pexpect.TIMEOUT,'Password.*: ',pexpect.EOF])
    child.sendline(password)
    print("beta",child.before.decode())
    child.expect(PROMPT)

def main():
    company='autobot'
    host = '13.94.61.225'
    user = 'limechat'
    password = 'Wavicle@12345'
    child = connectVM(user, host , password)
    send_command(child, 'cd apps/demo-website/')
    send_command(child,'ls')
    send_command(child,'touch test2.txt')
    send_command(child,'git status')
    send_command(child,'git add .')
    send_command(child,'''git commit -m "automation tester2 from vm"''')
    connectGit('team336', 'wavicle123')
    # send_command(child,'pm2 reload demo')
    return print("Completed!, Find Page at https://demo.limechat.ai/{}".format(company))

if __name__ == '__main__':
        main()