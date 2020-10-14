import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import Header from '../components/header/header.component'
import Dropdown from '../components/dropdown/dropdown.component'

import LAYOUT_DATA from '../constants/layout_data'
import Navbar from '../components/navbar/navbar.component'
import Colors from '../components/colors/colors.component'
import Fonts from '../components/fonts/fonts.component'
import CodeSnippet from '../components/code-snippet/code-snippet.component'

const LayoutPage = ({match, history}) => {
    const [letter, setLetter] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const onKeypress = event => {
        const {key} = event;

        // make sure you are only accounting for singular letters when using keypress navigation

        let regEx  = /[a-zA-Z]/.test(key);
        if(key.length === 1 && regEx) {
            history.push(`/layout/${key.toLowerCase()}`)
            setLetter(key.toLowerCase())
        }
    }

    useEffect(() => {
        window.scrollTo(0,0);
        setIsOpen(false);
        setLetter(match.params.letter);
    }, [match.params.letter])

    useEffect(() => {
        document.addEventListener('keypress', onKeypress);
        return () => document.removeEventListener('keypress', onKeypress);
    }, [])

    const handleClick = () => setIsOpen(!isOpen);

    const handleLocation = letter => {
        setIsOpen(!isOpen)
        history.push(`/layout/${letter}`);
    }
    
    // Map over components to avoid passing in data to each individual one
    
    const SECTIONS = [
        Header,
        Colors,
        Fonts,
        CodeSnippet
    ];

    return (
        <main>
            {
                LAYOUT_DATA.map(data => data.letter === letter && (
                    <>
                    <Navbar 
                        data = {data} 
                        isOpen = {isOpen}
                        handleClick = {handleClick}
                    />
                    <Dropdown 
                        contrast = {data.contrast} 
                        handleClick = {handleLocation}
                        isVisible = {isOpen}
                    />
                    {
                        SECTIONS.map(Section => (
                            <Section data = {data} />
                        ))
                    }
                    </>
                ))
            }
        </main>
    )
}

export default withRouter(LayoutPage);
