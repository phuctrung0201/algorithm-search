const section = {
    id: 14,
    title: "Pseudocode",
    content:
    <html>
        <pre style={{ display: "block", backgroundColor: "#eee", border: "1px solid #999" }}>{`
            Procedure binary_search
            A ← sorted array
            n ← size of array
            x ← value to be searched
         
            Set lowerBound = 1
            Set upperBound = n 
         
            while x not found
               if upperBound < lowerBound 
                  EXIT: x does not exists.
            
               set midPoint = lowerBound + ( upperBound - lowerBound ) / 2
               
               if A[midPoint] < x
                  set lowerBound = midPoint + 1
                  
               if A[midPoint] > x
                  set upperBound = midPoint - 1 
         
               if A[midPoint] = x 
                  EXIT: x found at location midPoint
            end while
            
         end procedure
        `}</pre>
    </html>
};
export default section;