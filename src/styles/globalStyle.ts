import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

	* {
		margin: 0%;
		padding: 0%;
		list-style: none;
		text-decoration: none;
		font-family: "Poppins", sans-serif;

		button, a {
			border: none;
			display: flex;
			font-size: 1rem;
			cursor: pointer;
			align-items: center;
			justify-content: center;
      background-color: transparent;
		}
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		&::-webkit-scrollbar {
			width: 20px;
			background-color: #545454;
		}

		&::-webkit-scrollbar-thumb {
			background-color: #898989;
		}
	}
`
export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282729;

  .container {
    gap: 1rem;
    width: 570px;
    display: flex;
    flex-direction: column;

    .title {
      color: #ffffff;
    }

    .content {
      height: 426px;
      overflow: hidden;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 10px;
        display: none;
      }

      .content-list {
        gap: 1rem;
        width: 100%;
        display: flex;
        max-height: 500px;
        flex-direction: column;
        transition: max-height 0.3s ease-in-out;

        .content-item {
          display: flex;
          position: relative;
        }
      }
    }

    .controllers {
      gap: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      input {
        width: 100%;
        border: none;
        outline: none;
        padding: 1rem;
        color: #ffffff;
        border-radius: 0.2rem;
        background-color: #212022;
      }

      .addtaks {
        width: 200px;
        height: 26px;
        color: #ffffff;
        padding: 1.5rem;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 0.2rem;
        background-color: #4e64e8;
      }

      .shuffle {
        height: 26px;
        display: flex;
        padding: 1.5rem;
        font-size: 1.2rem;
        align-items: center;
        border-radius: 0.2rem;
        justify-content: center;
        background-color: #6c737c;
      }
    }

    @media (min-width: 320px) and (max-width: 1024px) {
      width: 90%;
    }
  }
`

export default GlobalStyle
