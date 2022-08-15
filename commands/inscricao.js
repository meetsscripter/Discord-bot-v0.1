
const Discord = require(`discord.js`);
const prefix = ("!")


p1 = `Idade real:`
p2 = `Nome Completo e RG (Joãozinho Santos - 50482)`
p3 = `RG:`
p4 = `Total no banco:`
p5 = `Veículos:`
p6 = `Quem te indicou?:`
p7 = `Já foi de alguma organização? se sim qual?:`
p8 = `Celular:`
p9 = `Disponibilidade:`


var blacklist_dc = [
'898056356051947553',
'977320059250802729',
'979927858585673728',
'552939447830970378',
'272169457550622720',
'784206986081337364',
'749048077209567322',
'821187257289408542',
'690860151359537172',
'238756813992886272',
'302488608785563648',
'613185544066957344',
'469542579982041088',
'353220361233367040',
'269986771574587393',
'779345414540623923',
'837024591443787836',
'973013987937632357',
'620298963018317824',
'787804053287206923',
'761322953819291669',
'341006878786060290',
'405900750619803670',
'724115197555507211',
'716037393240817687',
'744446088521580645',
];

var blacklist_rg = [
'24755', 
'42044', 
'46041',
'488',
'34013',
'36299',
'76154',
'34326',
'9840',
'73673',
'72130',
'2147',
'29273',
'32663',
'73038',
'64190',
'53325',
'48705',
'66934',
'5492',
'63390',
'1011',
'21431',
'67273',
'5652',
'8907',
'4483',
'15129',
'42569',
'4643',
'20482',
'2612',
'8364',
'53001',
'40640',
'41504',
'29005',
'72469',
'31304',
];


exports.run = async (client, message, args) => {

    await message.author.createDM()
    message.delete()
    const embed = new Discord.MessageEmbed()
        .setAuthor('Sistema de registro Vercetti Family Destiny Roleplay', client.user.avatarURL())
        .setDescription('📌 Para começar Fazer seu registro digite \`continuar`\, não será tolerado brincadeiras com este comando, caso acontecer será punido sem aviso prévio.')
        .setColor('#C0C0C0')
        .setTimestamp()
        message.author.send(embed).catch(error => {
            message.channel.send(`${message.author} **Seu privado está bloqueado, libere seu privado para que o registro seja efetuado!**`)}) 
    var main = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, {
        time: 60000 * 30,
        max: 1,
    })

    main.on('collect', a => {
        if (a.content.toLowerCase() === "cancelar") return message.author.send('Registro cancelado');
        const pergun1 = new Discord.MessageEmbed()
            .setColor("#C0C0C0")
            .setDescription(`\`\`\`📍 - ${p1}\`\`\` `) 
            .addField('Para cancelar o registro digite ``cancelar``', 'você tem 3 Minutos para responder cada pergunta', true) 
        if (a.content.toLowerCase() === "cancelar") return message.author.send('Registro cancelado');
        if (a.content.toLowerCase() === "continuar") message.author.send(pergun1)
        var prg2 = message.author.dmChannel.createMessageCollector(b => b.author.id == message.author.id, {
            time: 60000*3,
            max: 1,
    })

    prg2.on('collect', b => {
        if (b.content.toLowerCase() === "cancelar") return message.author.send('Registro cancelado');
        let n1 = b.content
        const pergun2 = new Discord.MessageEmbed()
            .setColor("#C0C0C0")
            .setDescription(`\`\`\`💡 - ${p2}\`\`\` `) 
            .addField('Para cancelar o registro digite ``cancelar``', 'você tem 3 Minutos para responder cada pergunta', true)
            message.author.send(pergun2)
        var prg3 = message.author.dmChannel.createMessageCollector(f => f.author.id == message.author.id, {
            time: 60000*3,
            max: 1
    })

    prg3.on('collect', f => {
        if (f.content.toLowerCase() === "cancelar") return message.author.send('Registro cancelado');
        let n2 = f.content
        const pergun3 = new Discord.MessageEmbed()
            .setColor("C0C0C0")
            .setDescription(`\`\`\`💡 - ${p3}\`\`\``) 
            .addField('Para cancelar o registro digite ``cancelar``', 'você tem 3 Minutos para responder cada pergunta', true)
            message.author.send(pergun3)
        var prg4 = message.author.dmChannel.createMessageCollector(c => c.author.id == message.author.id, {
            time: 60000*3,
            max: 1
    })

    prg4.on('collect', b => {
        if (b.content.toLowerCase() === "cancelar") return message.author.send('Registro cancelado');
        let n3 = b.content
        const pergun2 = new Discord.MessageEmbed()
            .setColor("#C0C0C0")
            .setDescription(`\`\`\`💡 - ${p4} \`\`\``)
            .addField('Para cancelar o registro digite ``cancelar``', 'você tem 3 Minutos para responder cada pergunta', true)
            message.author.send(pergun2)
        var prg5 = message.author.dmChannel.createMessageCollector(f => f.author.id == message.author.id, {
            time: 60000*3,
            max: 1
    })
        
    prg5.on('collect', f => {
        if (f.content.toLowerCase() === "cancelar") return message.author.send('Registro cancelado');
        let n4 = f.content
        const pergun3 = new Discord.MessageEmbed()
            .setColor("C0C0C0")
            .setDescription(`\`\`\`💡 - ${p5}\`\`\``) 
            .addField('Para cancelar o registro digite ``cancelar``', 'você tem 3 Minutos para responder cada pergunta', true) 
            message.author.send(pergun3)
        var prg6 = message.author.dmChannel.createMessageCollector(c => c.author.id == message.author.id, {
            time: 60000*3,
            max: 1
    }) 
                    
    prg6.on('collect', f => {
        if (f.content.toLowerCase() === "cancelar") return message.author.send('Registro cancelado');
        let n5 = f.content
        const pergun3 = new Discord.MessageEmbed()
            .setColor("C0C0C0")
            .setDescription(`\`\`\`💡 - ${p6}\`\`\``) 
            .addField('Para cancelar o registro digite ``cancelar``', 'você tem 3 Minutos para responder cada pergunta', true) 
            message.author.send(pergun3)   
        var prg7 = message.author.dmChannel.createMessageCollector(c => c.author.id == message.author.id, {
            time: 60000*3,
            max: 1
    }) 

    prg7.on('collect', f => {
        if (f.content.toLowerCase() === "cancelar") return message.author.send('Registro cancelado');
        let n6 = f.content
        const pergun3 = new Discord.MessageEmbed()
            .setColor("C0C0C0")
            .setDescription(`\`\`\`💡 - ${p7}\`\`\``) 
            .addField('Para cancelar o registro digite ``cancelar``', 'você tem 3 Minutos para responder cada pergunta', true) 
            message.author.send(pergun3)     
        var prg8 = message.author.dmChannel.createMessageCollector(c => c.author.id == message.author.id, {
            time: 60000*3,
            max: 1
    }) 
    
    prg8.on('collect', f => {
        if (f.content.toLowerCase() === "cancelar") return message.author.send('Registro cancelado');
        let n7 = f.content
        const pergun3 = new Discord.MessageEmbed()
            .setColor("C0C0C0")
            .setDescription(`\`\`\`💡 - ${p8}\`\`\``)
            .addField('Para cancelar o registro digite ``cancelar``', 'você tem 3 Minutos para responder cada pergunta', true) 
            message.author.send(pergun3)
                    
            var prg9 = message.author.dmChannel.createMessageCollector(c => c.author.id == message.author.id, {
            time: 60000*3,
            max: 1
    }) 
    
    prg9.on('collect', f => {
        if (f.content.toLowerCase() === "cancelar") return message.author.send('Registro cancelado');
            let n8 = f.content
            const pergun3 = new Discord.MessageEmbed()
            .setColor("C0C0C0")
            .setDescription(`\`\`\`💡 - ${p9}\`\`\``)
            .addField('Para cancelar o registro digite ``cancelar``', 'você tem 3 Minutos para responder cada pergunta', true) 
            message.author.send(pergun3)
                        
            var fim = message.author.dmChannel.createMessageCollector(c => c.author.id == message.author.id, {
            time: 60000*3,
            max: 1
    })
                                   
    fim.on('collect', c => {
        let n9 = c.content
        const pergun3 = new Discord.MessageEmbed()
            .setColor("C0C0C0")
            .setDescription(`**Seu registro foi enviado! Aguarde até que algum responsavel o aprove. O prazo para aprovação é de até 1 dia, se passar disso significa que foi reprovado.**`)
            message.author.send(pergun3)
            const avaliacao = new Discord.MessageEmbed()
                .setTitle("**REGISTRO**")
                .setColor("#C0C0C0")
                .setDescription(`**${p1}** \n${n1}
                \n\n**${p2}** \n${n2}
                \n\n**${p3}**\n${n3}
                \n\n**${p4}**\n${n4}
                \n\n**${p5}**\n${n5}
                \n\n**${p6}**\n${n6}
                \n\n**${p7}**\n${n7}
                \n\n**${p8}**\n${n8}
                \n\n**${p9}**\n${n9}\n\n`)
                .setThumbnail("https://cdn.discordapp.com/attachments/1001859935048581190/1001873312605012128/1.png")
                client.channels.cache.get('1002200039344590938').send(avaliacao).then(async msg => {});
                client.channels.cache.get('1002200039344590938').send(`${message.author}`).then(async msg => {});
                if (blacklist_rg.includes(n3)) return client.channels.cache.get('974758691649769512').send("**💀 Blacklist Detected v0.1** <@&975910614088179763> sua inscrição deve ser negada!").then(async msg => {});
                if (blacklist_dc.includes(message.author.id)) return client.channels.cache.get('974758691649769512').send("**💀 Blacklist Detected v0.1** <@&975910614088179763> Este perfil de discord está na blacklist.").then(async msg => {});

                
            });
            })
            });
            });
            });
            });
            });
            });
            });
            });

};
exports.help = {
    name: "white"
}
