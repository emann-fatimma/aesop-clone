export default function SkinTypesFormulations() {
  const skinTypes = [
    {
      title: "For 'normal' skin",
      description:
        "Neither oily, nor dry—perhaps better described as 'balanced'.",
    },
    {
      title: "For dry skin",
      description:
        "Can be fragile, flaky, and dull in appearance resulting from a lack of sebum.",
    },
    {
      title: "For oily skin",
      description:
        "Often shiny in appearance with enlarged pores due to an over-supply of sebum.",
    },
    {
      title: "For combination skin",
      description:
        "Both oily and dry in nature, and susceptible to change and reactivity.",
    },
    {
      title: "For mature skin",
      description:
        "Naturally depleted with diminishing oil production and moisture retention.",
    },
    {
      title: "For sensitive skin",
      description:
        "Delicate and prone to aggravation and reactivity; can affect all skin types.",
    },
  ];
  return (
    <div className="w-full bg-[#F4F2E9] py-8 md:py-16 lg:py-32 px-4 md:px-6 lg:px-0 min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
      <div className="mx-auto max-w-7xl lg:relative">
        {/* Header */}
        <div className="mb-8 md:mb-16 lg:mb-24">
          <br className="hidden lg:block" />
          <br className="hidden lg:block" />
          <br className="hidden lg:block" />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-arial text-[#1C1C1C] leading-tight sm:leading-snug lg:leading-snug tracking-tight max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl lg:absolute lg:left-20">
            Formulations to support most skin types or concerns
          </h1>
        </div>
        <br className="hidden lg:block" />
        <br className="hidden lg:block" />
        <br className="hidden lg:block" />
        <br className="hidden lg:block" />
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-16 lg:gap-x-25 lg:gap-y-30 lg:min-h-[300px] xl:min-h-[300px] lg:absolute lg:left-20 lg:right-20">
          {skinTypes.map((skinType, index) => (
            <div key={index} className="space-y-3 sm:space-y-4 lg:space-y-4 md:space-y-5 lg:space-y-6">
              {/* Title with underline on hover and arrow */}
              <div className="flex items-start sm:items-center lg:items-center justify-between border-t border-[#1C1C1C] pt-3 sm:pt-4 lg:pt-4 md:pt-5 lg:pt-6">
                <h3 className="text-sm sm:text-base md:text-[17px] lg:text-[18px] font-medium lg:font-semibold text-[#1C1C1C] hover:underline cursor-pointer leading-tight lg:leading-normal pr-4 lg:pr-0">
                  {skinType.title}
                </h3>
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-[#1C1C1C] flex-shrink-0 mt-0.5 lg:mt-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              
              {/* Description */}
              <p className="text-[#4B4B4B] text-xs sm:text-sm md:text-[15px] lg:text-[16px] leading-relaxed md:leading-loose">
                {skinType.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}