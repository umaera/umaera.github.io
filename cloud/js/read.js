let apiUrl = null;

async function loadConfig() {
    try {
        const response = await fetch('../../cond.json'); 
        if (!response.ok) {
            throw new Error(`Err config file. state: ${response.status}`);
        }
        const config = await response.json();
        if (!config.apiUrl) {
            throw new Error("the key 'apiUrl' was not found");
        }
        apiUrl = config.apiUrl;
        console.log("✅ apiUrl:", apiUrl);
    } catch (err) {
        console.error("❌ apiUrl:", err.message);
    }
}

function RE(input) {
    input.value = input.value.replace(/\s/g, '');
}

async function validateToken(apiUrl) {
    const token = document.getElementById("token").value;
    const responseElement = document.getElementById("response");

    responseElement.textContent = "";

    if (!token) {
        responseElement.textContent = "EMPTY TOKEN KEY";
        return;
    }

    try {
        const response = await fetch(`${apiUrl}/validate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ token })
        });

        const data = await response.json();

        if (data.redirect) {
            responseElement.textContent = `[ Connecting to server: ${data.name} ]`;

            setTimeout(() => {
                window.location.href = `${data.redirect}`;
            }, 1500);
        } else if (data.message) {
            responseElement.textContent = data.message;
        } else {
            responseElement.textContent = "UNEXPECTED SERVER RESPONSE";
        }

    } catch (err) {
        console.error("[ERROR]:", err);
        responseElement.textContent = "ERROR CONNECTING TO SERVER";
    }
}

document.getElementById("token").addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        validateToken(apiUrl);
    }
});

loadConfig();


