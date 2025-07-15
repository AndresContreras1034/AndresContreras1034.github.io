graph TD

Inicio([Idea: Crear un portafolio web]) --> HTML[index.html: Contenido principal]
Inicio --> CSS[styles.css: Estilos visuales]
Inicio --> JS[main.js: Interacciones]

subgraph Proyecto Web
  HTML --> Repositorio[Repositorio: AndresContreras1034.github.io]
  CSS --> Repositorio
  JS --> Repositorio
end

Repositorio --> GitHubPages[GitHub Pages: Hosting estático]
GitHubPages --> WebPublicada[andrescontreras1034.github.io]

subgraph Dominio Personalizado
  CNAME[CNAME: Archivo con dominio personalizado]
  DNS[Configuración DNS en el proveedor]
  DNS --> GitHubPages
  CNAME --> GitHubPages
end

GitHubPages --> WebConDominio[andrescontreras1034.io o similar]

WebConDominio --> Final([Sitio en línea con dominio propio])
