import React from "react";
import "../App.css";

import "../stylesheets/datatable.css";


import $ from 'jquery';
import 'datatables.net-dt/css/jquery.dataTables.css';
import "datatables.net-dt/js/dataTables.dataTables";

import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";



const names = [
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

class DataTables extends React.Component{

      componentDidMount() {
        if (!$.fn.DataTable.isDataTable("#DCTable")) {
            setTimeout(function () {
                $("#table").DataTable({
                    retrieve: true,
                    pagingType: "full_numbers",
                    pageLength: 5,
                    paging: true,
                    processing: true,
                    dom: "Blfrtip",
                    select: {
                        style: "single",
                    },
                    buttons: [
                    {
                        extend: "copy",
                        className: "btn copy_btn",
                    },
                    {
                        extend: "csv",
                        className: "btn csv_btn",
                    },
                    {
                        extend: "print",
                        customize: function (win) {
                        $(win.document.body).css("font-size", "10pt");
                        $(win.document.body)
                            .find("table")
                            .addClass("compact")
                            .css("font-size", "inherit");
                        },
                        className: "btn print_btn",
                    },
                    ],
                    fnRowCallback: function (
                    nRow,
                    aData,
                    iDisplayIndex,
                    iDisplayIndexFull
                    ) {
                        var index = iDisplayIndexFull + 1;
                        $("td:first", nRow).html(index);
                        return nRow;
                    },
        
                    lengthMenu: [
                        [5,10, 20, 30, 50, -1],
                        [5,10, 20, 30, 50, "All"],
                    ],
                    columnDefs: [
                    {
                        targets: 0,
                        render: function (data, type, row, meta) {
                        return type === "export" ? meta.row + 1 : data;
                        },                     
                    },
                    ],
                }, 1000);
            });
            } 
       }
    
    showTable = () => {
        try {
          return names.map((item, index) => {
            return (
                <tr id="data_row">
                    <td>{index +1}</td>
                    <td>{item["Title"]}</td>
                    <td>{item["Director"]}</td>
                    <td>{item["Release Date"]}</td>
                    <td>{item["Box Office"]}</td>
                    <td>{item["Rotten Tomatoes"]}</td>
                </tr>
            );
          });
        } catch (e) {
          alert(e.message);
        }
      };


    render(){
        return(
            <div className="datatable_div">
                <h1>DC Movies</h1>
                <div className="table-container">
                    <div className="table-wrapper">
                        <table id="table" className="DCtable hover stripe">
                            <thead>
                                <tr id="data_header">
                                    <th>Order</th>
                                    <th id="title_header">Title</th>
                                    <th>Director</th>
                                    <th>Release Date</th>
                                    <th>Box Office</th>
                                    <th>Rotten Tomatoes</th>                            
                                </tr>
                            </thead>

                            <tbody>
                                {this.showTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default DataTables;