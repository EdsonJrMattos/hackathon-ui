import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        id: "oye743tuw7e78qw",
        title: "Barman",
        empresa: "Fancy Nail Lounge",
        description: "Conhecimentos sobre drinkse pestiscos",
        url: "images/empresa01.jpg"
      },
        {
          id: "213213123",
          title: "WEB Design",
          empresa: "Art Production Fund",
          description: "web design gráfico; design de interface; criação",
          url: "images/empresa02.jpg"
        },
        {
          id: "oye743t3442675686uw7e78qw",
          title: "Design",
          empresa: "Creative Threads",
          description: "Faculdade de Publicidade e Propaganda",
          url: "images/empresa03.jpg"
        },
        {
          id: "oye1234743tuw7e78qw",
          title: "Barista",
          empresa: "SpiceArt",
          description: "Deve ser profundo conhecedor de todas as fases da vida do café, desde o cultivo da planta, etapas de processamento e beneficiamento do grão, processos de torra e moagem",
          url: "images/empresa04.jpg"
        },
        {
          id: "oye743tuw37e78qw",
          title: "Desenvolvedor Junior",
          empresa: "Snapchat",
          description: "Desenvolvedor Junior - JavaScript",
          url: "images/empresa05.png"
        }
    ];
  }
});
