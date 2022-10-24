class Serie {
    id: number;
    nombre: string;
    channel: string;
    seasons: number;
    description: string;
    url: string;
    image: string;
    constructor(id: number, nombre: string, channel: string, seasons: number, description: string, url: string, image: string) {
      this.id=id;
      this.nombre=nombre;
      this.channel=channel;
      this.description=description;
      this.seasons=seasons;
      this.url=url;
      this.image=image;
    }
  }

  export {Serie};