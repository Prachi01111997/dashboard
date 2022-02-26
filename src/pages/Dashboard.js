import React, { useState } from 'react'
import Tiles from '../components/Tiles'
import styled from 'styled-components'
import Button from '../components/Button'

const Dashboard = () => {

    const [DATA_SET, setDataSet] = useState([1, 2, 3, 4, 5, 6, 7, 8, 1, 2]);
    const [inputText, setText] = useState(0);
    const [meanResult, setMeanResult] = useState(0);
    const [medianResult, setMedianResult] = useState(0);
    const [modeResult, setModeResult] = useState(0);

    function SearchData() {
        setDataSet([...DATA_SET, Number(inputText)]);
    }

    function getDataJson1234() {
        let meanResult = mean(DATA_SET);
        console.log(meanResult)
        let medianResult = median(DATA_SET);
        console.log(medianResult)
        let modeResult = mode()
        console.log(modeResult);
    }

    function mean(data) {
        let sum = data.reduce((previous, current) => previous + current, 0);
        let mean = sum / data.length;
        setMeanResult([mean])
        return mean;
    }

    function median(data) {
        let median
        if (data.length % 2 != 0) {
            median = DATA_SET[((DATA_SET.length + 1) / 2) - 1];
        }
        else {
            let first = DATA_SET.length / 2;
            let second = (DATA_SET.length / 2) + 1;
            let final = (first + second) / 2
            median = final;
        }
        setMedianResult([median])
        return median;
    }
    function mode() {
        let itemsMap = {};
        let maxValue = 0;
        let maxCount = 0;
        for (let item of DATA_SET) {
            if (itemsMap[item] == null) {
                itemsMap[item] = 1;
            } else {
                itemsMap[item]++;
            }
            if (itemsMap[item] > maxCount) {
                maxValue = item;
                maxCount = itemsMap[item];
            }
        }
        setModeResult(maxValue);
    }


    function getDataJson4321() {
        console.log("4321")
    }

    return (
        <>
            <TilesContainer>
                <Tiles value={meanResult} title="Mean" />
                <Tiles value={medianResult} title="Median" />
                <Tiles value={modeResult} title="Mode" />
                {/* <Tiles /> */}
            </TilesContainer>
            <FooterContainer>
                <InputContainer>
                    <InputType value={inputText} onChange={(e) => setText(e.target.value)} placeholder='Enter a number' />
                    <Search onClick={SearchData}>Search</Search>
                </InputContainer>
                <ApiButton>
                    <Button handleClick={getDataJson1234} text="Reload Json-1234 Data" />
                    <Button handleClick={getDataJson4321} text="Reload Json-4321 Data" />
                </ApiButton>
            </FooterContainer>
        </>
    )
}

export default Dashboard

const TilesContainer = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    background-color: #0086b3;
    flex-wrap: wrap;
`
const FooterContainer = styled.div`
    height: calc(100vh - 17vw - 120px);
    background-color: black;
    /* display: flex; */
    justify-content: center;
    padding-top: 50px;
`

const InputContainer = styled.div`
    /* border: 1px solid white; */
    /* margin: 40px; */
    border-radius: 0.8rem;
    /* width: 45%; */
    min-height: 4.5rem;
    max-height: 5.5rem;
    display: flex;
    padding: .5rem;
    justify-content: center;
    /* background-color: white; */
    box-sizing: border-box;
`

const InputType = styled.input`
  width: 30%;
  border: none;
  /* border-radius: 0.8rem; */
  padding: 1rem;
  font-size: 2rem;
  text-align: center;
  outline: none;
`
const Search = styled.button`
  width: 15%;
  border: none;
  /* border-radius: 0.8rem; */
  background-color: #ffcc00;
  color: white;
  font-size: 1.7rem;
  cursor: pointer;
`
const ApiButton = styled.div`
  display: flex;
  justify-content: center;
`