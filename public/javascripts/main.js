const User = require('../../models/user');
const crypto = require('crypto'),
    algorithm = 'aes-256-gcm',
    password = 'd6F3Efeqd6F3Efeqd6F3Efeqd6F3Efeq',
    iv = '60iP0h6vgfdssdgJoEa';


class Main {
    index(req, res, next){
        res.render('index', { title: 'Express' });
    }
    async post(req, res, next){
        let {name, password, message} = req.body;
        if(message){
            message = this.encrypt(message);
            let newUser = new User(req.body);
            newUser.message = message;
            const user = await newUser.save();
            res.render('index')
        }
        else{
            const user = await User.findOne({ name: name, password: password});
            message = this.decrypt(user.message);
        }
        res.end(message);
    }


    encrypt(text) {
        var cipher = crypto.createCipheriv(algorithm, password, iv.toString('hex').slice(0, 16))
        var encrypted = cipher.update(text, 'utf8', 'hex')
        encrypted += cipher.final('hex');
        var tag = cipher.getAuthTag();
        return {
          content: encrypted,
          tag: tag
        };
      }
      
      decrypt(encrypted) {
        var decipher = crypto.createDecipheriv(algorithm, password, iv.toString('hex').slice(0, 16))
        console.log(encrypted.tag.buffer)
        decipher.setAuthTag(encrypted.tag.buffer);
        var dec = decipher.update(encrypted.content, 'hex', 'utf8')
        dec += decipher.final();
        return dec;
      }
       
}

module.exports = new Main();