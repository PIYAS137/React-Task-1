

const SectionHeader = ({mainHeader,smallHeader}) => {
  return (
    <div className=" text-white text-center mt-10">
        <h1 className=" text-3xl font-semibold text-yellow-300">{mainHeader}</h1>
        <small>{smallHeader}</small>
    </div>
  )
}

export default SectionHeader