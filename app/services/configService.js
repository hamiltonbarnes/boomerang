angular.module('gdgXBoomerang')
.factory('Config', function () {
    return {
        // TODO Modify these to configure your app
        'name'          : 'GDG University Of Cape Coast',
        'id'            : '108678197502943958813',
        'googleApi'     : '<AIzaSyDGCCwpA3dEYkvrsBKBBdWXNjHpK2B5jV0>',
        'pwaId'         : 'https://get.google.com/albumarchive/101065155970756164483/album/AF1QipMYicekFcJuuDiEnZYzsmcKccQUW4Qdc7MeU40U', // Picasa Web Album id, must belong to Google+ id above
        'domain'        : 'http://www.gdgucc.org',
        'twitter'       : 'gdgucc',
        'facebook'      : 'gdguniveristy of cape coast',
        'youtube'       : 'UCkiYHK3IZMk5XsYZ626b9Rw',
        'meetup'        : 'gdgspacecoast',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, MMMM d, y - h:mm a',
        'cover' : {
            title: 'Worldwide GDG Events',
            subtitle: 'Directory of developer events organized by tags and displayed on a global map.',
            button: {
                text: 'Find local events',
                url: 'http://gdg.events/'
            }
        },
        'activities': {
            techTalks: true,
            codeLabs: true,
            hackathons: true,
            devFests: true,
            appClinics: true,
            panels: true,
            designSprints: true,
            roundTables: true
        },
        'HUB_IP': 'https://hub.gdgx.io'
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
