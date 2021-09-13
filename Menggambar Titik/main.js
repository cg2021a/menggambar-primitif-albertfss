function main(){
    //akses kanvas atau media untuk menggambar
    var canvas = document.getElementsById("myCanvas");
    //siapkan tools untuk menggambar --> bolpen, pensil, kuas, dsb
    var context = canvas.getContext("webgl");

    //mendefinisikan titik yang akan dibuat    
    var vertexShaderCode = `
    void main(){
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0); 
        gl_PointSize 10.0;
    }`;

    //membuat titik tsb
    var vertexShader = contex.createShader(contex.VERTEX_SHADER); //make bolpen
    var vertexShader = contex.createShader(contex.VERTEX_SHADER); //posisi titik yg mau digambar
    contex.compileShader(vertexShader); //compile jadikan 1 package

    //mendefinisikan fragment (fragment berhubungan dgn pewarnaan)
    var fragmentShaderCode = `
    void main(){
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); //membuat warna titik
    }
    `; 

    //membuat warna
    var fragmentShader = contex.createShader(contex.FRAGMENT_SHADER); 
    contex.shaderSource(fragmentShader, fragmentShaderCode);
    contex.compileShader(fragmentShader);

    //membuat package program agar data bisa dieksekusi
    var shaderProgram = contex.createProgram();
    context.attachShader(shaderProgram, vertexShader); //menambahkan data ke package
    contex.attachShader(shaderProgram, fragmentShader);
    contex.linkProgram(shaderProgram); //menghubungkan 1 sama lain jd 1 package
    contex.useProgram(shaderProgram); //sampe sini lah file baru siap di eksekusi

    //mendefinisikan background
    contex.clearColor(0.0, 0.0, 1.0, 1.0); //membuat jadi warna biru
    contex.clear(contex.COLOR_BUFFER_BIT); //membersihkan canvas nya

    contex.drawArrays(contex.POINTS, 0, 1); //menggambar titiknya





}