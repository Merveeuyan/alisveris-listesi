document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

  
    const productName = document.getElementById('productInput').value;

   
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ title: productName }) 
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('hata'); 
        }
        return response.json(); 
    })
    .then(data => {
       
        const productList = document.getElementById('productList');

       
        const li = document.createElement('li');
        li.textContent = data.title; 

        
        productList.appendChild(li);

        
        document.getElementById('productForm').reset();
    })
    .catch(error => console.error('Hata:', error)); 
});