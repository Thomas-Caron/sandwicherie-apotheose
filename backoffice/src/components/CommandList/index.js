//! == Import : npm ==
import React, { useEffect } from 'react';

//! == Import : local ==
import Command from './command';
// import Archivate from './archivate';
import './styles.scss';

//! == Composant ==
const CommandList = ({ getCommand, commands}) => {
    useEffect (() => { document.title = "Messieurs Croquent || Back Office - Commandes" }, []);
    return (
        <main className="commandList">
            <h1 className="commandList__command">Les commandes en cours</h1>
            <Command
                getCommand={getCommand}
                commands={commands}
            />
            {/* <h1 className="commandList__archivate">Les commandes archivées</h1> */}
            {/* <Archivate/> */}
        </main>
    );
};

//! == Export ==
export default CommandList;
