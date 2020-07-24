
const dotenv = require('dotenv');
var Flickr = require('flickr-sdk');

dotenv.config();
var feeds = new Flickr.Feeds(process.env.FLICKR_API_KEY);
// https://github.com/Flickr/flickr-sdk#Flickr.Feeds => 20 latest data only

feeds.publicPhotos({    
}).then(function (res) {
  console.log(res.body.items[0]);
}).catch(function (err) {
  console.error(err);
});

/* 
{
    title: 'Uploads from everyone',
    link: 'https://www.flickr.com/photos/',
    description: '',
    modified: '2020-07-23T06:11:29Z',
    generator: 'https://www.flickr.com',
    items: [
      {
        title: 'Musicas Relaxantes Acalmar a Mente - acalmar a mente: música relaxante piano e natureza',
        link: 'https://www.flickr.com/photos/188936271@N08/50142618948/',
        media: {
          m: 'https://live.staticflickr.com/65535/50146379363_34622defde_m.jpg'
        },
        date_taken: '2020-07-22T23:11:29-08:00',
        description: ' <p><a href="https://www.flickr.com/people/188936271@N08/">relaxantesmusicas</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/188936271@N08/50142618948/" title="Musicas Relaxantes Acalmar a Mente - acalmar a mente: música relaxante piano e natureza"><img src="https://live.staticflickr.com/65535/50142618948_5c34f35608_m.jpg" width="240" height="148" alt="Musicas Relaxantes Acalmar a Mente - acalmar a mente: música relaxante piano e natureza" /></a></p> <p>Musicas Relaxantes Acalmar a Mente - acalmar a mente: música relaxante piano e natureza Musicas Realxantes Acalmar a Mente - acalmar a mente: música relaxante piano e natureza: <a href="https://youtu.be/XYBdwwwygDM" rel="noreferrer nofollow">youtu.be/XYBdwwwygDM</a> SUBSCRIBE MY CHANNEL: <a href="https://www.youtube.com/channel/UClo3609Ydybs93S8agqdsPA?sub_confirmation=1" rel="noreferrer nofollow">www.youtube.com/channel/UClo3609Ydybs93S8agqdsPA?sub_conf...</a> Musicas Realaxantes Acalmar a Mente - Acalmar: Música Relaxar Suave - Paz Interior, Dormir Bem 3/mai/2019 - Música Relaxante - Acalmar a Mente e Relaxar - YouTube Meditação: técnicas para acalmar a mente e ser mais feliz Spa e Musica Relaxante para Massagens relaxamento spa 28/set/2017 - Lindas músicas para acalmar e aquietar o coração, Jesus te ama Meditação para curar doenças do corpo e da mente 3 Horas para Relaxar con Jesus : para acalmar o Stress ,Aliviar a Tensão e Ansiedade 2018 OmeleTV com mais de 1 hora de duração, agora na íntegra #MusicasRelaxantesAcalmaraMente #MusicasRelaxantes #BemEstar #AcalmaraMente #meditar <a href="https://youtu.be/XYBdwwwygDM" rel="noreferrer nofollow">youtu.be/XYBdwwwygDM</a></p>',
        published: '2020-07-23T06:11:29Z',
        author: 'nobody@flickr.com ("relaxantesmusicas")',
        author_id: '188936271@N08',
        tags: 'ifttt youtube musicas relaxantes'
      },
      
      ......

    ]
}

*/