import React, {useRef, useState, useEffect} from 'react'

import {ComponentWrapper, Textarea, CopyBtn} from './copy-to-clipboard.styles'


    const CopyToClipboard = ({children, text, btnText, ...rest}) => {
        const textareaRef = useRef(null);
        const [isSelected, setIsSelected] = useState(false);

        const copyTextarea = () => {
            textareaRef.current.select();
            document.execCommand('copy');
            setIsSelected(true);
            setTimeout(() => {
                setIsSelected(false);
            }, 1000)
        }
    
        return (
            <ComponentWrapper>
                <Textarea ref= {textareaRef}>
                    {text}
                </Textarea>
                <CopyBtn className= 'copybtn' onClick = {copyTextarea} {...rest}>
                    {isSelected ? 'Copied!' : btnText}
                </CopyBtn>
                    {children}
            </ComponentWrapper>
        )
    }

export default CopyToClipboard;