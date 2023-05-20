const routes = [
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: 'GET',
        path: '/home',
        handler: (request, h) => {
            return {
                message: 'Homepage',
                data: {
                    name: 'Ahmad Rivaiy',
                    location: 'Cimahi',
                    nrp: '3120510901',
                    description: 'Mahasiswa Informatika'
                }
            };
        }
    }
];

module.exports = routes;
