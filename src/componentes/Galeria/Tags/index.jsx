import { styled } from 'styled-components'
import tags from './tags.json'

const TagsContainer = styled.h3`
    display: flex;
    color: #D9D9D9;
    font-size: 24px;
    font-weight: 400;
    gap: 50px;
    padding-top: 50px;
    align-items: center;
`

const TagsEstilizadas = styled.div`
    display: flex;
    gap: 24px;
`

const TagBotao = styled.button`
    font-size: 24px;
        background-color: rgba(217, 217, 217, 0.3);
        color: #FFFFFF;
        padding: 10px 8px;
        border-radius: 10px;
        box-sizing: border-box;
        cursor: pointer;
        transition: background-color 0.3s ease;
        border: 2px solid transparent;
        &:hover {
        border-color: #C98CF1;
        }
`

const Tags = ({ setTag }) => {
    return <>
        <TagsContainer>
            Busque por tags:
            <TagsEstilizadas>
                {tags.map(tag => <TagBotao key={tag.id} onClick={() => setTag(tag.tag)}> {tag.titulo}</TagBotao>)}
            </TagsEstilizadas>
        </TagsContainer>


    </>
}

export default Tags