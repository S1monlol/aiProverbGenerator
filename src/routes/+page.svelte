<script>

$: proverb = "Click generate to get a proverb"

async function generate(){
    let keyword = document.getElementById("keyword").value;

    proverb = "Loading..."

    console.log(keyword)

    let response = await fetch(`/api/generate?search=${keyword}`);

    let data = await response.json();

    console.log(data.data.choices[0].message.content)

    proverb = data.data.choices[0].message.content;

}

</script>

<body>
    <h1>Proverb Generator</h1>
    <div id="notTitle">
        <div class="input-group">
            <input type="text" id="keyword" placeholder="Enter a keyword" />
            <button on:click={() => generate()} id="generate">Generate</button>
        </div>
    </div>

    <div id="proverb">
        <h2>{proverb}</h2>
    </div>

</body>

<style>
    body {
        background-color: black;
        font-family: "Roboto", sans-serif;
        color: white;
        text-align: center;
        
        height: 100vh;
        margin: 0;
    }
    #notTitle {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .input-group {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .input-group input {
        font-size: 20px;
        padding: 10px;
        width: 300px;
        border: none;
        border-radius: 5px 0 0 5px;
    }
    .input-group button {
        font-size: 20px;
        padding: 10px;
        border: none;
        background-color: #4caf50;
        color: white;
        cursor: pointer;
        border-radius: 0 5px 5px 0;
    }
    .input-group button:hover {
        background-color: #45a049;
    }

    #proverb {
        animation: fadeIn 5s; 
    }
</style>
