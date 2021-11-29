function Display({results}) {

  return (
    <>
      {results
        ? JSON.stringify(results)
        : null
      }
    </>
  )
}

export default Display;
