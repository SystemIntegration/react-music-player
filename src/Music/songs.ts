import songOne from './one.mp3';
import songTwo from './two.mp3'
import songThree from './three.mp3'
import songFour from './four.mp3'
import songFive from './five.mp3'
import songSix from './six.mp3'
import songSeven from './seven.mp3'
import songEight from './eight.mp3'
import songNine from './nine.mp3'
import songTen from './ten.mp3'


const songs = [
    {
        songName: 'Kesariya',
        mainImageUrl: 'https://i.scdn.co/image/ab67616d0000b273c08202c50371e234d20caf62',
        subImageUrl: 'https://i.scdn.co/image/ab67616d00004851c08202c50371e234d20caf62',
        songId: '4UMIv5jd9gK98a39BQRD9X',
        artistName: 'Arijit Singh',
        albumName: 'Kesariya (From "Brahmastra")',
        year: '2022',
        src:songOne,
        duration:'04:28',
    },
    {
        songName: 'Tere Pyaar Mein',
        mainImageUrl: 'https://i.scdn.co/image/ab67616d0000b273fdd4cc7defb987b4c3aa2d9e',
        subImageUrl: 'https://i.scdn.co/image/ab67616d00001e02fdd4cc7defb987b4c3aa2d9e',
        songId: '2ZD4aIEepqZsdxPxLSuUhm',
        artistName: 'Arijit Singh',
        albumName: 'Tere Pyaar Mein (From "Tu Jhoothi Main Makkaar")',
        year: '2023',
        src:songTwo,
        duration:"02:57",
    },
    {
        songName: 'Pyaar Hota Kayi Baar Hai',
        mainImageUrl: 'https://i.scdn.co/image/ab67616d00001e0283e569e0fa43464cb8525561',
        subImageUrl: 'https://i.scdn.co/image/ab67616d0000b27383e569e0fa43464cb8525561',
        songId: '2vPrBucKCfKmafHhSfJ2pt',
        artistName: 'Arijit Singh',
        albumName: 'Pyaar Hota Kayi Baar Hai (From "Tu Jhoothi Main Makkaar")',
        year: '2023',
        src:songThree,
        duration:"03:03",
    },
    {
        songName: 'Maan Meri Jaan',
        mainImageUrl: 'https://i.scdn.co/image/ab67616d0000b27337f65266754703fd20d29854',
        subImageUrl: 'https://i.scdn.co/image/ab67616d00001e0237f65266754703fd20d29854',
        songId: '1418IuVKQPTYqt7QNJ9RXN',
        artistName: 'King',
        albumName: 'Maan Meri Jaan',
        year: '2022',
        src:songFour,
        duration:'03:14',
    },
    {
        songName: 'Tere Hawaale',
        mainImageUrl: 'https://i.scdn.co/image/ab67616d0000b273336a3ce27714f4f4999da39d',
        subImageUrl: 'https://i.scdn.co/image/ab67616d00001e02336a3ce27714f4f4999da39d',
        songId: '4blqlsA1uf2d2I40E90EUC',
        artistName: 'Arijit Singh',
        albumName: 'Tere Hawaale (From "Laal Singh Chaddha")',
        year: '2022',
        src:songFive,
        duration:"05:50",
    },
    {
        songName: 'Sulthan',
        mainImageUrl: 'https://i.scdn.co/image/ab67616d0000b273d8d07e9d050af03dc2784c87',
        subImageUrl: 'https://i.scdn.co/image/ab67616d00001e02d8d07e9d050af03dc2784c87',
        songId: '2cOS4QnlGhfHWFxkot7ZXj',
        artistName: 'MaleBrijesh Shandilya',
        albumName: 'Sulthana (From "Kgf Chapter 2")',
        year: '2022',
        src:songSix,
        duration:"03:53",
    },
    {
        songName: 'The Monster Song',
        mainImageUrl: 'https://i.scdn.co/image/ab67616d0000b273168c581aa3b85e52798be132',
        subImageUrl: 'https://i.scdn.co/image/ab67616d00001e02168c581aa3b85e52798be132',
        songId: '6Ml882mcsf03PGkoqMp0vL',
        artistName: 'Adithi Sagar',
        albumName: 'The Monster Song (From "KGF Chapter 2")',
        year: '2022',
        src:songSeven,
        duration:"02:46",
    },
    {
        songName: 'Naacho Naacho (From "Rrr")',
        mainImageUrl: 'https://i.scdn.co/image/ab67616d0000b2734c30b2c8eaa6ed1b01c518a6',
        subImageUrl: 'https://i.scdn.co/image/ab67616d00001e024c30b2c8eaa6ed1b01c518a6',
        songId: '208sMwgVcaFt2mT79Df1KG',
        artistName: 'Vishal Mishra',
        albumName: 'Naacho Naacho (From "Rrr")',
        year: '2021',
        src:songEight,
        duration:"03:34",
    },
    {
        songName: 'Malang Sajna',
        mainImageUrl: 'https://i.scdn.co/image/ab67616d0000b273e4be675de3a03b2ad2552c6d',
        subImageUrl: 'https://i.scdn.co/image/ab67616d00001e02e4be675de3a03b2ad2552c6d',
        songId: '73K33p4Vyz9koXGqmL5eFs',
        artistName: 'Sachet Tandon',
        albumName: 'Malang Sajna',
        year: '2022',
        src:songNine,
        duration:"02:37",
    },
    {
        songName: 'Toofan (From "Kgf Chapter 2")',
        mainImageUrl: 'https://i.scdn.co/image/ab67616d0000b273eeb2de3c7773e8caa97f50bc',
        subImageUrl: 'https://i.scdn.co/image/ab67616d00001e02eeb2de3c7773e8caa97f50bc',
        songId: '45GXsEdPxpFLnqQMPR2Cyy',
        artistName: 'Brijesh Shandilya',
        albumName: 'Toofan (From "Kgf Chapter 2")',
        year: '2022',
        src:songTen,
        duration:"03:38",
    },
]
export default songs;