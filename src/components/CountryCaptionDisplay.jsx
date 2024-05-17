

const CountryCaptionDisplay = ({word}) => {
    const formattedWord = word.replaceAll(',',',\n');
  return (
    <caption>{formattedWord}</caption>
  )
}

export default CountryCaptionDisplay