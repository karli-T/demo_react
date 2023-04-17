import DataTable from 'react-data-table-component';
import React from 'react';


const customStyles = {
    table: {
		style: {
			width : '85%',
		},
	},
    tableWrapper: {
		style: {
			display: 'table',
            margin: '0 auto',
            width : '100%',
		},
	},
    header: {
        style: {
            minHeight: '56px',
        },
    },

    rows: {
        style: {
            minHeight: '72px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};


const columns = [
    {
        name: 'Title',
        selector: row => row["Title"],
        sortable: true,
    },
    {
        name: 'Director',
        selector: row => row["Director"],
        sortable: true,
    },
    {
        name: 'Release Date',
        selector: row => row["Release Date"],
        sortable: true,
    },
    {
        name: 'Box Office',
        selector: row => row["Box Office"],
        sortable: true,
    },
    {
        name: 'Rotten Tomatoes',
        selector: row => row["Rotten Tomatoes"],
        sortable: true,
    },
];

const data = [
    {
        "Title" : "Batman Begins",
        "Director" :  "Christopher Nolan",
        "Release Date" : 2005,
        "Box Office" : "$373,700,000",
        "Rotten Tomatoes" : "84%",
    },
    {
        "Title" : "The Dark Knight",
        "Director" :  "Christopher Nolan",
        "Release Date" : 2008,
        "Box Office" : "$1,006,000,000",
        "Rotten Tomatoes" : "94%",
    },
    {
        "Title" : "The Dark Knight Rises",
        "Director" :  "Christopher Nolan",
        "Release Date" : 2012,
        "Box Office" : "$1,081,000,000",
        "Rotten Tomatoes" : "87%",
    },
    {
        "Title" : "Man of Steel",
        "Director" :  "Zack Snyder",
        "Release Date" : 2013,
        "Box Office" : "$668,000,000",
        "Rotten Tomatoes" : "56%",
    },
    {
        "Title" : "Batman v Superman: Dawn of Justice",
        "Director" :  "Zack Snyder",
        "Release Date" : 2016,
        "Box Office" : "$873,000,000",
        "Rotten Tomatoes" : "29%",
    },
    {
        "Title" : "Justice League",
        "Director" :  "Zack Snyder",
        "Release Date" : 2017,
        "Box Office" : "$657,900,000",
        "Rotten Tomatoes" : "39%",
    },
    {
        "Title" : "Wonder Woman",
        "Director" :  "Patty Jenkins",
        "Release Date" : 2017,
        "Box Office" : "$822,800,000",
        "Rotten Tomatoes" : "93%",
    },
    {
        "Title" : "Wonder Woman 1984",
        "Director" :  "Patty Jenkins",
        "Release Date" : 2020,
        "Box Office" : "$169,600,000",
        "Rotten Tomatoes" : "76%",
    },
    {
        "Title" : "Aquaman",
        "Director" :  "James Wan",
        "Release Date" : 2018,
        "Box Office" : "$1,148,000,000",
        "Rotten Tomatoes" : "65%",
    },
    {
        "Title" : "Shazam!",
        "Director" :  "David F. Sandberg",
        "Release Date" : 2019,
        "Box Office" : "$367,800,000",
        "Rotten Tomatoes" : "90%",
    },
    {
        "Title" : "Joker",
        "Director" :  "Todd Phillips",
        "Release Date" : 2019,
        "Box Office" : "$1,074,000,000",
        "Rotten Tomatoes" : "69%",
    },
    {
        "Title" : "Green Lantern",
        "Director" :  "Martin Campbell",
        "Release Date" : 2011,
        "Box Office" : "$116,600,000",
        "Rotten Tomatoes" : "26%",
    },
    {
        "Title" : "The Suicide Squad",
        "Director" : "James Gunn",
        "Release Date" : 2021, 
        "Box Office" : "$169,000,000",
        "Rotten Tomatoes" : "90%",

    }
]

class ReactDataTables extends React.Component {
    render(){
        return (
            <div className="datatable_div">
                <DataTable
                    columns={columns}
                    data={data}
                    customStyles={customStyles}
                    pagination
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
                />
            </div>
    );
    }
};

export default ReactDataTables;