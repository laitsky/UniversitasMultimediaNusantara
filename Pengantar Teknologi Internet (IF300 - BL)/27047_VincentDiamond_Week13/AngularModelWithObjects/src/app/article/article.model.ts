export class Article {
    title: string; // untuk title article
    link: string;  // untuk link pada article nantinya
    votes: number; // untuk jumlah vote pada article

    // kita bangun constructor pembentuk model, karena nantinya
    // article akan bisa bertambah ketika ditekan submit link
    constructor(title: string, link: string, votes?:number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    // article nantinya akan memiliki vote up dan vote down
    // seperti forum pada reddit
    voteUp(): void {
        this.votes += 1;
    }
    voteDown(): void {
        this.votes -= 1;
    }
    domain(): string {
        // function domain ini akan membuat kita mengambil link utama dari web
        // https://www.google.com/angular7, setelah dilakukan split hasilnya
        // akan menjadi www.google.com, mulai dari slash akan dipotong(split)
        try {
            const domainAndPath: string = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}