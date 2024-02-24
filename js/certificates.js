const apiUrl = 'https://script.googleusercontent.com/macros/echo?user_content_key=QBlQcwUkNPIslwRuyBrFEK9bJDgwfE7FTffhMS7B6suU_DIywpZ49nYy8vVyXv9hPZQJTqoLTnefociHe1DPxdPF2JNT1Iwgm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAl5sxJB77muCXm-ww17QrE6C3oA5WdoZApOAiWUERKxlaT74OqU_Zim1X1nNFj-9o6ezQGE9lgBplNpH9mSxD5lt6PxCQYT3Q&lib=MOrxS98yy4AWfGq6bzf1Y0CNdqRA9QzAz';

// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Function to update the HTML content with API data
async function updateDataOnPage() {
    const apiDataDiv = document.getElementById('certificate-container');

    // Fetch data from the API
    const data = await fetchData();

    // Build the HTML content
    let htmlContent = '<ul>';
    data.forEach(item => {
        htmlContent += `
        <li>
          <strong>${item.name}</strong> - ${item.issuingAuthority}
          <br>
          Issued on: ${new Date(item.issuedOn).toLocaleDateString()}
          <br>
          Certificate ID: ${item.certificateId}
          <br>
          <a href="${item.verifyUrl}" target="_blank">Verify Certificate</a>
          <iframe src="${item.verifyUrl}" style="width: 400px; height: 200px;"></iframe>
          </li>
      `;
    });
    htmlContent += '</ul>';

    // Update the HTML content in the 'apiData' div
    apiDataDiv.innerHTML = htmlContent;
}

// Call the function to update data on page load
updateDataOnPage();