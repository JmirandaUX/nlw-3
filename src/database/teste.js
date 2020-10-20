const Database = require('./db');

Database.then(function(db) {
    // inserir dados na tabela de
    db.run(`
        INSERT INTO orphanages (
            lat, 
            lng, 
            name, 
            whatsapp, 
            image, 
            instructions, 
            opening_hours, 
            open_on_weekends
        ) VALUES (
            "-27.222633",
            "-49.6455874",
            "Lar das Meninas",
            "Presta assistência a crança de 06 a 15 anos que se encontre em situação de risco e/ou  vulnerabilidade social.",
            "https://images.unsplash.com/photo-1567791124560-c60b7d227623?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Veja como se sentir a vontade e traga muito amor e paciência para dar",
            "Horário de visita das 18 até as 20h",
            "1"
        );
    `)

    // consultar dados da tabela
})