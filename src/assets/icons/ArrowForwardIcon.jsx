import styled from 'styled-components'

const ArrowEmail = styled.svg`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  display: ${(props) => (props.input === 'email' ? 'block' : 'none')};
`
export const ArrowForwardIcon = (props) => (
  <ArrowEmail
    input={props.input}
    width='44'
    height='44'
    viewBox='0 0 44 44'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M22 13.9844L30.0156 22L22 30.0156L20.5938 28.6094L26.1719 22.9844H13.9844V21.0156H26.1719L20.5938 15.3906L22 13.9844Z'
      fill='url(#paint0_linear_18374_605)'
    />
    <defs>
      <linearGradient id='paint0_linear_18374_605' x1='22' y1='0' x2='22' y2='44' gradientUnits='userSpaceOnUse'>
        <stop stopColor='#BC9CFF' />
        <stop offset='1' stopColor='#8BA4F9' />
      </linearGradient>
    </defs>
  </ArrowEmail>
)
